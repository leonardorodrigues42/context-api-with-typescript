import styled from 'styled-components'

const ListProductsDiv = styled.div`
    display: flex;

    .product-cart {
        width: 250px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        figure {
            width: 250px;
            height: 250px;
        
            img {
                height: 100%;
            }
        }

    }
`

export default ListProductsDiv