'use client'
import { Inbox } from 'lucide-react'
import React from 'react'
import {useDropzone} from 'react-dropzone'
const FileUpload = () => {
        const {getRootProps,getInputProps}= useDropzone({
            accept: {'application/pdf':[".pdf"]},
            maxFiles: 1,
            onDrop: (acceptedFiles) => {
                console.log(acceptedFiles);
            }
        })
    return (
        <div className='p-2 bg-black rounded-xl'>
            <div {...getRootProps({        
                className: "border-dashed w-25 h-20 border-2 rounded-2xl cursor-pointer bg-[#18F500] py-4 flex justify-centre items-center flex-col"
            })}
        >
                <input {...getInputProps()}/>
                <>
                <Inbox className="w-10 h-10 text-black"/>
                <p className="mt-2 text-sm text-stone">Drop PDF!</p>
                </>
            </div>
        </div>
    )
}

export default FileUpload