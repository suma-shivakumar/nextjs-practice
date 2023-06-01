import {useRouter} from 'next/router';

function ClientsProjectPage(){

    const router = useRouter();

    function loadProjectHandler(){
        // load data...
        // router.push('/clients/max/pA');
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: {id: "max",clientprojectid:"projectA"}
        });
    }

    return (
    <div>
        <h1>Clients Project Page</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
    );
}

export default ClientsProjectPage;