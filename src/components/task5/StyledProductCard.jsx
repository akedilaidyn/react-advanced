import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 24rem;
  border-radius: 0.25;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d5db;
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  padding: 1rem 1.5rem;
`;

const Button = styled.button`
  background-color: oklch(62.3% 0.214 259.815);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: oklch(54.6% 0.245 262.881);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: oklch(37.3% 0.034 259.733);
  font-size: 1rem;
  line-height: 1.5;
`;

export default function StyledProductCard() {
  return (
    <Wrapper>
      <Image src="https://placehold.co/400x200" alt="Product" />
      <Content>
        <Title>Sample Product</Title>
        <Description>
          This is a brief description of the sample product. It highlights key
          features and benefits to attract potential customers.
        </Description>
      </Content>

      <Content>
        <Button>Add to Cart</Button>
      </Content>
    </Wrapper>
  );
}
