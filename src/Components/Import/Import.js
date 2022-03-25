import React, { useRef } from 'react';
import Button from '../Button/PrimaryButton/Button';

const ImportButton = ({ onImportData }) => {
    const inputRef = useRef(null);

    const openFileSelector = () => {
        inputRef.current.click();
    }

    const importFile = (event) => {
        const files = event?.target?.files;

        if (!files.length) {
            return;
        }

        const file = files[0];
        getFileContent(file).then((content) => {
            let parsedData = JSON.parse(content);
            onImportData(parsedData);
        });
    }

    const getFileContent = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            }

            reader.onerror = (event) => {
                reject(event.target.error);
            }

            reader.readAsText(file);
        })
    }

    return (<>
        <input
            type="file"
            accept="text/json"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={importFile}
        />
        <Button color="#61b0b7" onClick={openFileSelector}>Upload Json</Button>

    </>);
}

export default ImportButton;