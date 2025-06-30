import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { useLanguage } from "../../../../../../context";

interface RecordFieldProps{
    text: string;
}

export const RecordField = ({text} : RecordFieldProps) => {
    const [copied, setCopied] = useState(false);
    const {t} = useLanguage();

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return(
    <div className="shadow shadow-blue-500 rounded-lg">
        <div className="flex-col justify-end items-end bg-gray-400 px-2 py-1.5 rounded-t-md">
            <button 
            onClick={handleCopy}
            className="flex cursor-copy items-center gap-1 text-sm text-white hover:text-gray-300">
            {copied ? 
            (
                <>
                <FiCheck className="text-green-500" /> {t.copied}
                </>
            ) : 
            (
                <>
                <FiCopy /> {t.copy}
                </>
            )}
            </button>
        </div>
        <p className="bg-white rounded-lg rounded-t-none p-3">
            {text}
        </p>
    </div>
    )
}