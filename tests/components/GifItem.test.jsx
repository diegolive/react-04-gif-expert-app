import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe( 'Pruebas de <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test( 'snapshot matches', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    } );

    test( 'debe mostrar la imagen con el URL y el ATL indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        // screen.debug();
        // console.log( screen.getByRole( 'img' ) );
        // expect( screen.getByRole( 'img' ).src ).toBe( url );
        // expect( screen.getByRole( 'img' ).alt ).toBe( title );
    } );

    test( 'debe mostrar el título en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        // Busca en el texto renderizado no en las propiedades por eso está bien
    } );

} );