import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';

class Container extends React.Component {

	handleClick = () => {
		console.log( 'propspropspropsprops', this.props )
		this.props.getUsers()
	}

	render() {
		return (
			<div>
				<h1>Container</h1>
				<button onClick={this.handleClick}>SUBMIT</button>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
			</div>
		)
	}
}

const mapStateToProps = state => ({ users: state.users } )

const mapDispatchToProps = dispatch => (
	{
		getUsers: () => dispatch( fetchUsers() )
	}
)


export default connect( mapStateToProps, mapDispatchToProps )(List)
