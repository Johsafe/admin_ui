import { Card } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SubLayout from '../Layout/SubLayout';

export default function EditCategoryScreeen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Edit Categories</title>
          </Helmet>

          <div
            style={{
              display: 'flex',
              gap: '5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link to="/category">
              {' '}
              <button className="btn btn-danger">Go to Categories</button>
            </Link>
            <div>
              <h1 style={{fontweight:'bold'}}>Edit Categories</h1>
            </div>
          </div>

          <Card style={{ display: 'flex', padding: '2rem' }}>
            <div style={{ width: '50%' }}>
              <div style={{ padding: '2rem' }}>
                <div class="mb-2">
                  <label for="name" class="form-label">
                    Category Name
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div>
                  <div class="mb-1">
                    <label for="image" class="form-label">
                      Image
                    </label>
                    <input type="file" class="form-control" id="image" />
                  </div>
                </div>
                <div class="mb-2">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  style={{ width: '27.5rem', padding: '0.5rem' }}
                  className="btn btn-sm btn-success"
                >
                  Submit
                </button>
              </div>
            </div>

            <div style={{ width: '50%' }}>
              <img
                style={{ width: '100%', height: '350px', borderRadius: '10px' }}
                src="https://mobimg.b-cdn.net/v3/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg"
                alt=""
              />
            </div>
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
