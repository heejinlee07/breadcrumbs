import styled from 'styled-components';

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      display: inline-block;
      content: '';
      height: 0.8em;
      border-right: 0.1em solid lightgray;
      transform: rotate(15deg);
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

function App() {
  return (
    <Breadcrumbs>
      <Crumb href='/'>Home</Crumb>
      <Crumb href='/living'>Living Room</Crumb>
      <Crumb href='/living/couch'>Couches</Crumb>
      <Crumb href='/living/couch/sectional'>Sectionals</Crumb>
    </Breadcrumbs>
  );
}

export default App;
