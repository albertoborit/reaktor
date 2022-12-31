 const concidenceSearch = (obj, param) => {
        return obj.name.replace(' ','').includes(param[1])
        //return Object.values(obj).includes(param[0]) ***Only if want to compare every value
    }
    export default concidenceSearch