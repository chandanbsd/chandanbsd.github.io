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

export const SkillSection = () => {

    let skillObj: skillKey = {
        angular: {
            imageSrc: angularImg.src,
            viewValue: "Angular",
            bgColor: "#821131"
        },
        typescript: {
            imageSrc: typescriptImg.src,
            viewValue: "TypeScript",
            bgColor: "#2C4E80"
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
            bgColor: "#9B7EBD"
        },
        azureSQLServer: {
            imageSrc: azureSQLServer.src,
            viewValue: "SQL Server",
            bgColor: "#FFBF61"
        },
        azureCosmosDB: {
            imageSrc: azureCosmosDB.src,
            viewValue: "CosmosDB",
            bgColor: "#24CAA"
        },
    }

    return (
        <div className="text-center">
            <div className="ml-auto mr-auto">
                <h3 className="text-4xl font-semibold text-center leading-tight p-4">
                    Key Skills
                </h3>
                <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch md:justify-evenly">
                    {Object.entries(skillObj).map(([key, skill], i) => (<div className="carousel-item">
                        <div key={i} className={`card w-25 h-25 mb-5 md:mb-0 md:mr-2 bg-[${skill.bgColor}] md:transition-transform duration-300 hover:scale-105 hover:shadow-sm`}>
                            <figure className="p-5 pb-2">
                                <img style={{ width: '110px', height: '110px' }} src={skill.imageSrc} alt={`${skill.viewValue} logo`} />
                            </figure>
                            <div className="card-body text-center pt-0 pb-2">
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
