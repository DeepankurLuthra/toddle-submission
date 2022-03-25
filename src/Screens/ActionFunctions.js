import Node from "./Node";

export const addRow = (data, setData ,rootLevel) => {
        const node = new Node();
        const lastNode = data[data.length - 1];
        if (lastNode) {
            node.level = lastNode.level;
            node.previous = lastNode.id;
            lastNode.next = node.id;
        } else {
            node.level = rootLevel;
        }

        setData([
            ...data,
            node
        ])
    }

    export const updateText = (data, setData, text, node) => {
        node.name = text;
        setData([...data]);
    }

    export const changeLevel = (data, setData, node, changeInLevel) => {
        node.level += changeInLevel;
        setData([...data]);
    }

    export const outdent = (node) => {
        changeLevel(node, -1);
    }

    export const indent = (node) => {
        changeLevel(node, 1);
    }

    const findNodesToBeDeleted = (data,node, index) => {
        const nodesToBeDeleted = [node];

        if (!node.next) {
            return nodesToBeDeleted;
        }

        for (let loopIndex = index + 1; loopIndex < data.length; loopIndex++) {
            const currentNode = data[loopIndex];
            if (currentNode.level <= node.level) {
                currentNode.previous = data[index - 1]?.id;
                break;
            }

            nodesToBeDeleted.push(currentNode);
        }

        return (nodesToBeDeleted);
    }
    export const deleteNode = (data, setData, node, index) => {
       const nodesToBeDeleted = findNodesToBeDeleted(node, index);
        const nodeNotToBeDeleted = (node) => nodesToBeDeleted.indexOf(node) < 0
        const filteredData = data.filter(nodeNotToBeDeleted);
        setData([...filteredData]);
    }

    

    export const canOutdent = (node, rootLevel) => node.level !== rootLevel;
    export const canIndent = (data, node) => {
        const previousNode = data.find(child => child.id === node.previous);
        return previousNode?.level >= node?.level;
    };


