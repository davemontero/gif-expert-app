import PropTypes from 'prop-types'
import { GifGrid } from '../../src/components/GifGrid'
import { render, screen } from "@testing-library/react"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas de componente GifGrid', () => { 
    const category = 'One Punch'
    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />)
        
        expect( screen.getByText('Cargando...'))
        expect( screen.getByText( category ))
     })

     test('debe mostar items cuando se cargan las imagenes', () => { 
        const gifs = [
            {
                id: 'abasdsf',
                title: 'Saitama',
                url: 'https://local/saitama.gif'
            },
            {
                id: 23423,
                title: 'Goku',
                url: 'https://local/goku.gif'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={ category } />)
        expect( screen.getAllByRole('img').length ).toBe(2)
      })


 })

 GifGrid.propTypes = {
    category: PropTypes.string.isRequired
 }