import Image from "next/image";
import {BuildingStorefrontIcon} from "@heroicons/react/24/outline";
import {PhoneIcon} from "@heroicons/react/24/outline";


const Info = () => {

    return (
    <div className="pt-52 flex items-center justify-center">
    <div className="flex items-center justify-center" > 
    <div className="mr-1 w-{300px} max-w-sm bg-white border-2 border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a className="flex justify-center items-center" href="#">
        <PhoneIcon className="h-16 w-16 text-gray-900 dark:text-white" aria-hidden="false" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 className="flex justify-center items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Atendimento
          </h5>
          <br/>
          <h4 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
          Atendemos via telefone, e-mail e presencialmente.
          </h4>
        </a>
      </div>
      </div>
      <div className="mr-3 w-{300px} max-w-sm bg-white border-2 border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a className="flex justify-center items-center" href="#">
      <BuildingStorefrontIcon className="h-16 w-16 text-gray-900 dark:text-white" aria-hidden="false" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 className="flex justify-center items-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Levantamento
          </h5>
          <br/>
          <h4 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
          Compre Online e faça o levantamento na loja mais próxima.
          </h4>
        </a>
      </div>
      </div>
      </div>
      </div>
    );
    };
    
export default Info;    