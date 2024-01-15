import React, { useEffect } from 'react';

const useDocumentTitle=()=>{
   function updateTitle(title){
    document.title = title
   }
   return updateTitle
};


export default useDocumentTitle;