import ButtonEdit from '../Buttons/Edit/ButtonEdit';
import ButtonRead from '../Buttons/Read/ButtonRead';
import './ButtonBox.css'

export default function ButtonBox(rowData) {
    return (
        <div className="buttonBox">
            <ButtonRead client={rowData}/>

            <ButtonEdit client={rowData}/>

            {/*
                esto nova aqui, irá en fact
            <button type="button" id="buttonDelete" className="buttonTable">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-printer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>
            </button>
 */}
            <button type="button" id="buttonDelete" className="buttonTable">
                <svg version="1.1" viewBox="0 0 512 512" ><path d="M320,113V93.3c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3V113h-80v15h21.1l23.6,290.7   c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400v-15H320z M207,93.3c0-8.1,6.2-14.3,14.3-14.3h69.5   c8.1,0,14.3,6.2,14.3,14.3V113h-98V93.3H207z M202.7,401L192,160h14.5l10.9,241H202.7z M263,401h-14V160h14V401z M309.3,401h-14.6   l10.8-241H320L309.3,401z" fill="#ffffff" /></svg>
            </button>
        </div>
    );
}