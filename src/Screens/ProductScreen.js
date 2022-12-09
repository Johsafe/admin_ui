import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function ProductScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Products</title>
          </Helmet>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>My Products</h1>
            <div>
              <Link to="/add">
                {' '}
                <button className="btn btn-success">Add Product</button>
              </Link>
            </div>
          </div>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">InStock</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Avatar>M</Avatar>
                  </th>
                  <td>Mango</td>
                  <td>Fruit</td>
                  <td>20</td>
                  <td>ksh 70</td>
                  <td>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        style={{ display: 'flex' }}
                      >
                        {/* <Button>One</Button> */}
                        <Button>
                          <Link to="/edit">
                            <EditIcon />
                          </Link>
                        </Button>
                        <Button>
                          <DeleteIcon style={{ color: 'red' }} />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Avatar>C</Avatar>
                  </th>
                  <td>Corriender</td>
                  <td>Vegetable</td>
                  <td>20</td>
                  <td>ksh 70</td>
                  <td>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        style={{ display: 'flex' }}
                      >
                        {/* <Button>One</Button> */}
                        <Button>
                          <EditIcon />
                        </Button>
                        <Button>
                          <DeleteIcon style={{ color: 'red' }} />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Avatar>R</Avatar>
                  </th>
                  <td>Red Chilli</td>
                  <td>Spice</td>
                  <td>0</td>
                  <td>ksh 50</td>
                  <td>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        style={{ display: 'flex' }}
                      >
                        {/* <Button>One</Button> */}
                        <Button>
                          <EditIcon />
                        </Button>
                        <Button>
                          <DeleteIcon style={{ color: 'red' }} />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
