import React, { useEffect, useState } from 'react';
import Button from '../Button/PrimaryButton/Button';

const ExportButton = ({ data }) => {
    const [href, setHref] = useState('');

    useEffect(() => {
        if (data.length === 0) {
            setHref(`javascript:void(0)`);
        } else {
            setHref(`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`);
        }
    }, [data]);
    return (<>
        <a
            href={href}
            download="DummyJSON.json"
        >
            <Button color="#16558f" >Save Json</Button>
        </a>
    </>);
}



export default ExportButton;