import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import Card from '@mui/material/Card';

export default function UsersScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Users</title>
          </Helmet>
          <h1>My Users Screen</h1>
          <Card>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="profile-card-2">
                  <img
                    src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
                    className="img img-responsive"
                    alt=""
                  />
                  <div className="profile-name">JOHN DOE PETERSON</div>
                  <div className="profile-username">@johndoesurname</div>
                </div>
              </div>

              <div>
                <div className="profile-card-2">
                  <img
                    src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
                    className="img img-responsive"
                    alt=""
                  />
                  <div className="profile-name">JOHN DOE PETERSON</div>
                  <div className="profile-username">@johndoesurname</div>
                </div>
              </div>

              <div>
                <div className="profile-card-2">
                  <img
                    src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
                    className="img img-responsive"
                    alt=""
                  />
                  <div className="profile-name">JOHN DOE PETERSON</div>
                  <div className="profile-username">@johndoesurname</div>
                </div>
              </div>

              <div>
                <div className="profile-card-2">
                  <img
                    src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
                    className="img img-responsive"
                    alt=""
                  />
                  <div className="profile-name">JOHN DOE PETERSON</div>
                  <div className="profile-username">@johndoesurname</div>
                </div>
              </div>
            </div>

          
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
