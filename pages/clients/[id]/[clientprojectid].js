import {useRouter} from 'next/router'

function SelectedClientProjectPage(){

    const router = useRouter();

    console.log(router.query);//id: 'max', clientprojectid: 'p1'}

    return (
    <div>
        <h1>SelectedClientProjectPage</h1>
    </div>
    );
}

export default SelectedClientProjectPage;