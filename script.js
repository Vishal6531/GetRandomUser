        async function getRandomUser() {
            try {
                let response = await fetch("https://randomuser.me/api/");
                let data = await response.json();
                let user = data.results[0];

                // Update DOM
                document.getElementById("username").innerText = `Name: ${user.name.first} ${user.name.last}`;
                document.getElementById("email").innerText = `Email: ${user.email}`;
                document.getElementById("location").innerText = `Location: ${user.location.city} ${user.location.country}`;
                document.getElementById("userPhoto").src = user.picture.large;
            }
            catch (error) {
                document.getElementById("username").innerText = "Error loading user!";
            }
        }
        getRandomUser();