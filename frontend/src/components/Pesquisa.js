import React from "react";
function Pesquisa() {
  return (
    <div class="relative ml-4 mr-5">
      <input
        type="text"
        class="border-2 border-red rounded-full py-2 px-4 w-64"
        placeholder="Pesquisar pratos"
      />
      <button type="submit" class="absolute right-0 top-0 mt-2v5 mr-4">
        <svg
          width="25"
          height="25"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.5014 35.5014L26.4066 26.4066M26.4066 26.4066C28.8681 23.9451 30.251 20.6066 30.251 
            17.1255C30.251 13.6444 28.8681 10.3059 26.4066 7.84437C23.9451 5.38286 20.6066 4 17.1255 4C13.6444 4 
            10.3059 5.38286 7.84437 7.84437C5.38286 10.3059 4 13.6444 4 17.1255C4 20.6066 5.38286 23.9451 7.84437 
            26.4066C10.3059 28.8681 13.6444 30.251 17.1255 30.251C20.6066 30.251 23.9451 28.8681 26.4066 26.4066Z"
            stroke="#FF0038"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
export default Pesquisa;
