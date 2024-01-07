import React,{useRef,useEffect} from "react";
import {mount as marketingMount} from "marketing/marketIndex";



export default () => {
    const marketDivRef = useRef(null);

    const a = 100;

    useEffect(() => {
        if (marketDivRef.current) {
            marketingMount(marketDivRef.current);
        }
    },)

    return <div ref={marketDivRef} />
}
