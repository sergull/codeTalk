// db'de verilerimiz unique idler altında json obşesi şeklinde tutuluyor
// bu fonksiyon sayesinde json objeleri array şekline dönüştürülecek ve 
// idler de objelerin içine id olarak eklenecek böylelikle flatlist le gösterebileceğiz
//mapledikten sonra zamana göre sortla
export default function(data){

    return(
        //Object.keys ile verilen objenin keyleri  array yapısına dönüştürüldü
        Object.keys(data)
        .map(key => {
            return{
                id : key,
                ...data[key],
            };
        })
        .sort(function(a, b) {
            return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
        })
    )

}