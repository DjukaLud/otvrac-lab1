import React, {Component} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import Home from "../pages/Home";
import Datatable from "../pages/Datatable";
import CreateNew from "../pages/CreateNew";
import Edit from "../pages/Edit"
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../pages/Profile";

const App = ()=> {
    
      const {isAuthenticated ,isLoading, error} = useAuth0();


      return (
        <div className="App">
          <Routes>
              <Route exact path="/"
                element = {<>
                  {error && <p>Authentication Error</p>}
                  {!error && isLoading && <p>Loading...</p>}
                  {!error && !isLoading && (<>
                    <LoginButton/>
                    
                    <Home/></>
                  )}
                  </>
                }
              /> 
              <Route exact path="/datatable"
                element = {
                    <Datatable/>
                }
              />
              <Route exact path="/createNew"
                element = {<>
                  <CreateNew/>
                  </>
                }
              />
              <Route exact path="/editKlub/:id"
                element = { <>
                  <Edit/>
                  </>
                }
              />
              <Route exact path="/profile"
                element = { <>
                  <Profile/>
                  </>
                }
              />
          </Routes>
        </div>
      );

  }

export default App;