"use client";
import dynamic from 'next/dynamic';

const InteractiveCodeWindow = dynamic(() => import('./CodeTab'), { 
  ssr: false,
  loading: () => <div style={{ height: '350px' }} /> 
});

export default function CodeTabCLient(){
    return(
        <InteractiveCodeWindow/>
    )
}