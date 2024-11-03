import Image from "next/image";
import angularImg from "../../public/angular.svg";
import azureCosmosDB from "../../public/azure-cosmos-db.svg";
import azureSQLServer from "../../public/azure-sql-server.svg";
import azure from "../../public/azure.svg";
import csharp from "../../public/csharp.svg";
import dotnet from "../../public/dotnet.svg";
import typescriptImg from "../../public/typescript.svg";

interface skillItem {
    imageSrc: string,
    viewValue: string,
    bgColor: string,
}
interface skillKey {
    angular: skillItem,
    typescript: skillItem,
    dotnet: skillItem,
    entityFrameworkCore: skillItem,
    csharp: skillItem,
    azure: skillItem,
    azureSQLServer: skillItem,
    azureCosmosDB: skillItem,
}

const SkillSection = () => {

    const skillObj: skillKey = {
        angular: {
            imageSrc: angularImg.src,
            viewValue: "Angular",
            bgColor: "#C75B7A"
        },
        typescript: {
            imageSrc: typescriptImg.src,
            viewValue: "TypeScript",
            bgColor: "#C75B7A"
        },
        dotnet: {
            imageSrc: dotnet.src,
            viewValue: ".NET",
            bgColor: "#9B7EBD"
        },
        entityFrameworkCore: {
            imageSrc: dotnet.src,
            viewValue: "EFCore",
            bgColor: "#9B7EBD"
        },
        csharp: {
            imageSrc: csharp.src,
            viewValue: "C#",
            bgColor: "#9B7EBD"
        },
        azure: {
            imageSrc: azure.src,
            viewValue: "Azure",
            bgColor: "#6A9AB0"
        },
        azureSQLServer: {
            imageSrc: azureSQLServer.src,
            viewValue: "SQL Server",
            bgColor: "#FFEEAD"
        },
        azureCosmosDB: {
            imageSrc: azureCosmosDB.src,
            viewValue: "CosmosDB",
            bgColor: "#FFEEAD"
        },
    }

    return (
        <div className="text-center">
            <div className="ml-auto mr-auto">
                <h3 className="text-4xl font-semibold text-center leading-tight p-4">
                    Key Skills
                </h3>
                <div className="flex flex-col items-center justify-center  md:flex-row md:flex-wrap md:items-stretch md:justify-evenly">
                    {Object.entries(skillObj).map(([key, skill]) => (
                        <div key={key} className="card isolate rounded-xl shadow-lg glass mb-5 md:mb-0 md:mb-5 md:mr-5 transition-transform duration-300 hover:scale-105 hover:shadow-sm" style={{ background: `${skill.bgColor}` }}>
                            <div className={`card  w-60 h-60 pb-0 mb-5 md:mr-1 `}>
                                <figure className="p-5 pb-2 text-center self-center" style={{ width: '125px', height: '125px' }}>
                                    <Image width={100} height={100} src={skill.imageSrc} alt={`${skill.viewValue} logo`} />
                                </figure>
                                <div className="card-body text-center ">
                                    <h2 className="card-title justify-center">
                                        {skill.viewValue}
                                    </h2>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div >
    );
};

export default SkillSection;
