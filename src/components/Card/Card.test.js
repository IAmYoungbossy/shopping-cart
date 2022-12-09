import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  it('should render the component', () => {
    // Arrange
    const src = 'image-src';
    const alt = 'image-alt';
    const item = { id: '123' };
    const model = 'model';
    const brandName = 'brand-name';
    const currentPrice = '10';
    const proviousPrice = '20';
    const numberInStock = '5';
    const shoppingProducts = {
      '123': {
        itemNum: 0
      }
    };
    const handleManipulateCartItem = jest.fn();

    // Act
    render(
      <Card
        src={src}
        alt={alt}
        item={item}
        model={model}
        brandName={brandName}
        currentPrice={currentPrice}
        proviousPrice={proviousPrice}
        numberInStock={numberInStock}
        shoppingProducts={shoppingProducts}
        handleManipulateCartItem={handleManipulateCartItem}
      />
    );

    // Assert
    expect(screen.getByAltText(alt)).toBeInTheDocument();
    expect(screen.getByText(brandName)).toBeInTheDocument();
    expect(screen.getByText(model)).toBeInTheDocument();
    expect(screen.getByText(`$${currentPrice}`)).toBeInTheDocument();
    expect(screen.getByText(`$${proviousPrice}`)).toBeInTheDocument();
    expect(screen.getByText(`${numberInStock} Available in stock`)).toBeInTheDocument();
  });
});