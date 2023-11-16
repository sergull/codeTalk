// db'de verilerimiz unique idler altında json obşesi şeklinde tutuluyor
// bu fonksiyon sayesinde json objeleri array şekline dönüştürülecek ve 
// idler de objelerin içine id olarak eklenecek böylelikle flatlist le gösterebileceğiz

export default function(data){

    return(
        //Object.keys ile verilen objenin keyleri  array yapısına dönüştürüldü
        Object.keys(data).map(key => {
            return{
                id : key,
                ...data[key],
            };
        })
    )

}