<template>
    <h3>Edit Person</h3>
    <input type="number" id="editIndexInput" placeholder="Enter index to edit" />
    <div id="editFeedback" class="feedback"><em>Enter an index to load person data</em></div>
    <div id="editFormSection" class="edit-form-section">
        <input type="text" id="editName" placeholder="Name" />
        <input type="number" id="editWeight" placeholder="Weight (kg)" />
        <input type="number" id="editHeight" placeholder="Height (cm)" />
        <input type="text" id="editPhotoUrl" placeholder="Image URL" />
        <button onclick="editPerson()">Update</button>
    </div>
</template>
<script>
</script>