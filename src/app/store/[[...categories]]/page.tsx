interface CategoryProps {
    params: {
        categories: string[],
        seachParams: string
    }
}

export default function Category(props : CategoryProps) {
    //throw new Error('Error: boom!')
    const {categories} = props.params;
    console.log(categories);
    return(
        <h1>Category: {categories}</h1>
    );
}