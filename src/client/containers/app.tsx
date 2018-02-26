// Node module
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Grid,
  Transition,
  Dimmer,
  Loader,
  Header,
  Image,
  Step
} from 'semantic-ui-react';
import styled from 'styled-components';

interface IAppProps {
  name: string;
  className?: string;
}

interface IAppState {
  isLoading: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { isLoading: true };
  }

  public componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }

  public render() {
    const { name, className } = this.props;
    const { isLoading } = this.state;

    return (
      <Container className={className}>
        <Grid
          verticalAlign='middle'
          centered
          columns={1}
          textAlign='center'
          relaxed
          stretched
          className='app-grid'
        >
          <Grid.Row>
            <Grid.Column>
              <Transition visible={isLoading} duration={500} unmountOnHide>
                <Dimmer page active>
                  <Loader size='large' content='Loading...' active />
                </Dimmer>
              </Transition>
              <Header as='h1' icon textAlign='center'>
                <Image centered size='large' src='/favicon.ico' />
                <Header.Content>RKSTWB</Header.Content>
              </Header>
              <Step.Group ordered>
                <Step completed>
                  <Step.Content>
                    <Step.Title>Getting Started</Step.Title>
                    <Step.Description>Hello RKSTWB!</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default styled(App) `
  .app-grid {
    height: 100vh;
  }
`;