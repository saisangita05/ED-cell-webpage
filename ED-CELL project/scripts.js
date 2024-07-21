document.addEventListener('DOMContentLoaded', function() {
    const teamLeaderForm = document.getElementById('team-leader-form');
    if (teamLeaderForm) {
        teamLeaderForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate the form fields
            const leaderName = document.getElementById('leader-name').value;
            const leaderEmail = document.getElementById('leader-email').value;
            const leaderPhone = document.getElementById('leader-phone').value;
            const leaderYear = document.getElementById('leader-year').value;
            const leaderBranch = document.getElementById('leader-branch').value;
            const teamMembers = document.getElementById('team-members').value;

            if (leaderName && leaderEmail && leaderPhone && leaderYear && leaderBranch && teamMembers) {
                window.location.href = 'yukti-challenge.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    const yuktiChallengeForm = document.getElementById('yukti-challenge-form');
    if (yuktiChallengeForm) {
        yuktiChallengeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registration Confirmed!');
        });
    }
});
