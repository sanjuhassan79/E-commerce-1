




const addToDb=item=>{
const db=getDb();

if(item in db){

    db[item]=db[item]+1;;
}else{
    db[item]=1;
}

saveToDb(db);

}
const saveToDb=db=>{
const dbJSON=JSON.stringify(db)
    localStorage.setItem('shopping',dbJSON)
}

const removeFromDb=item=>{

    const db=getDb()
    delete db[item]
}


const removeFromDb=item=>{
    const db=getDb()
    delete db[item]
}

const getDb=()=>{
    const savedDb=localStorage.getItem('shopping')
     saveToDb=JSON.parse(saveToDb)
    const db={ }
    return db
}