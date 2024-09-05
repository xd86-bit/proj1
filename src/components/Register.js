import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import urlLogo from "../assets/imgs/logo.png";
import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    return (
        <div class="container">
            <div class="row" style={{ marginTop: '50px' }}>
                <div class="col-md-12 col-sm-12 text-center logo">
                    <img src={urlLogo} width="200px" alt="Logo" />
                </div>
            </div>
            <div class="row" style={{ marginTop: '120px' }}>
                <div class="col-md-12 col-sm-12 text-center title">
                    <h2 style={{ fontWeight: '600' }}>Creer un Compte</h2>
                
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-sm-6 offset-md-3 offset-sm-3">
                    <form action="" method="post">
                        <div class="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="email@domain.com"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                class="form-control"
                                name="pass"
                                placeholder="Mot de passe"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                class="form-control"
                                name="confirmerPass"
                                placeholder="Confirmer le mot de passe"
                            />
                        </div>
                        
                        <div class="form-group">
                            <button class="btn btn-primary btn-block" type="submit">
                                Creer un Compte
                            </button>
                        </div>
                    </form>
                    <div class="text-center">
                    <p class="text-primary" onClick={()=>{navigate('/login');}}>Se Connecter</p>
                    </div>
                   
                </div>
            </div>
           
        </div>
    );
}
