import { useLanguage } from "../../../../context";
import { RecordField } from "./components";

interface ReviewRecordProps{
    promt: string;
    response: string;
}

export const ReviewRecord = ({promt, response}: ReviewRecordProps) => {
    const {t} = useLanguage()
    return(
        <>
        <div className="space-y-3 mb-8">
            <h2 className="font-semibold text-blue-500 text-xl">
                {t.promtHistory}
            </h2>
            <RecordField text={promt}/>

        </div>

       <div className="space-y-3 mb-8">
            <h2 className="font-semibold text-blue-500 text-xl">
                {t.responseHistory}
            </h2>
            <RecordField text={response}/>
        </div>
        </>
    )
}