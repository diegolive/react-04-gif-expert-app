import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe( 'Pruebas de <GifExpertApp />', () => {

    test( 'debe mostrar el título', () => {
        render( <GifExpertApp /> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( 'GifExpertApp' );
    } );

    test( 'debe visualizar una categoria al añadirla', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        const category = 'Dragon Ball';
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );
        expect( screen.getAllByRole( 'heading', { level: 3 } )[ 0 ].innerHTML ).toContain( category );
    } );

    test( 'debe visualizar una categoria ya existe', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        const category = 'Dragon Ball';
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );
        const cnt = screen.getAllByRole( 'heading', { level: 3 } ).length;
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );
        expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe( cnt );
    } );



} );