import {
  OrangeTextSpan,
  OrangeTextBlock,
  Text,
  Wrapper,
} from './NoProductSearchResults.styled';

export const NoProductSearchResult = () => {
  return (
    <Wrapper>
      <Text>
        <OrangeTextSpan>Sorry, no results were found</OrangeTextSpan> for the
        product filters you selected. You may want to consider other search
        options to find the product you want. Our range is wide and you have the
        opportunity to find more options that suit your needs.
      </Text>
      <OrangeTextBlock>Try changing the search parameters.</OrangeTextBlock>
    </Wrapper>
  );
};
