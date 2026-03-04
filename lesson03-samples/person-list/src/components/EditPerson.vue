<template>
  <div class="person-edit">
    <div v-if="edit">
      <input :id="'name-' + person.id" v-model="editName" class="edit-input">
      <button @click="update" class="btn btn-update">Update</button>
      <button @click="cancel" class="btn btn-cancel">Cancel</button>
    </div>
    <div v-else class="display-mode">
      <span class="person-name">Name: {{ person.name }}</span>
      <button @click="startEditing" class="btn btn-edit">Edit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update-event']);
const props = defineProps({
  person: {
    type: Object,
    required: true
  }
});

const editName = ref(props.person.name);
const edit = ref(false)

watch(() => props.person.name, (newValue) => {
    editName.value = newValue
});

function update() {
  let name = editName.value.trim();
  if ( name != props.person.name ){
      emit('update-event', { name, id: props.person.id });
  }
  edit.value = false;
}

function cancel(){
  editName.value = props.person.name;
  edit.value = false;
}

function startEditing(){
  edit.value = true;
}

</script>

<style scoped>
.person-edit {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.display-mode {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.person-name {
  font-size: 1.2em;
  font-weight: bold;
}

.edit-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-left: 20px;
}

.btn-edit {
  background-color: #007bff;
  color: white;
}

.btn-update {
  background-color: #28a745;
  color: white;
}

.btn-cancel {
  background-color: #dc3545;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}
</style>

