import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import background from '../../../images/images/bannerbackground1.png';

const Login = () => {
    return (
        <div>
            <PageTitle title='Login'></PageTitle>
            <section className='login-background-img' style={{ backgroundImage: `url(${background})` }}>
                <form>
                    <input type="text" name='name' required /><br />
                    <input type="email" name="" id="" required /><br />
                    <input type="password" name="" id="" /><br />
                    <input type="confirm-password" name="" id="" /><br />
                    <input type="submit" value="Sign in" /><br />
                </form>
            </section>
        </div>
    );
};

export default Login;