export const TriggerWelcome = async (participant: any) => {

    if (participant.photo && participant.photo.url) {
        // Assuming the 'photo' field is populated and contains the 'url'
        console.log(`${participant.collegeName} and ${participant.participantNumber} also ${participant.photo.url}`);
    } else {
        console.log("No photo URL available for this participant.");
    }
}