import React from 'react';
import { Pagination } from '@material-ui/lab';

export default function PaginationPokemons (props){
    const statePage = props.statepage
    const [page, setPage] = React.useState(statePage);
    const handleChange = (event, value) => {props.changePag(value); setPage(value)};
    
    return (
        <div className="pagination-container">
            <Pagination 
            count={25} 
            variant="outlined" 
            color="secondary" 
            size="large"  
            page={page}
            onChange={handleChange}
            />
        </div>
    )
}
