import {DONE , DELETE , EDIT , ADD} from '../types/ToDoTypes ';

export const done =(id)=>{
return{
    type:DONE,
    payload:id
    };
};

export const del =(id)=>{
    return{
        type:DELETE,
        payload:id
    };
};

export const edit =(id,newWork)=>{
    return{
        type:EDIT,
        payload:{id , work:newWork}
    };
};

export const add =(work)=>{
return{
    type:ADD,
    payload:work
}
}
