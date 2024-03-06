import '../user/UserProfileStyles.css'

function UserProfile(prop){
    return (
        <div className="user-profile-sec">
            {/* <p>Hello {prop?.name}-{prop?.email}</p> */}

            <div>
                <p>Name</p>
                <input type='text' value={prop.name}/>
            </div>
            <div>
                <p>Email</p>
                <input type='text' value={prop.email}/>
            </div>

        </div>
    );
}

export default UserProfile;