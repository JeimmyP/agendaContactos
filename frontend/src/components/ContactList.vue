<template>
    <div>
        <div class="field is-grouped is-grouped-right">
            <router-link :to="{ name: 'Create' }" class="button is-light is-rounded mt-5">
                <span class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="user-plus" />
                    </span>
                    <span>Nuevo Contacto</span>
                </span>
            </router-link>
        </div>
        <table class="table is-striped is-fullwidth mt-4"> 
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Correo electrónico</th>
                    <th class="has-text-centered"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.email }}</td>
                    <td class="has-text-centered">
                        <div class="buttons are-small">
                            <router-link :to="{ name: 'Edit', params: { id: item.id } }" class="button is-info is-light">
                                <font-awesome-icon icon="edit"/>
                            </router-link>
                            <a class="button is-danger is-light" @click="deleteContact(item.id)">
                                <font-awesome-icon icon="trash-alt"/>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
    // import axios
    import axios from "axios";
    
    export default {
        name: "ContactList",
        data() {
            return {
                items: [],
            };
        },
        
        created() {
            this.getContacts();
        },
        
        methods: {
            // Get All Contacts
            async getContacts() {
                try {
                    const response = await axios.get("http://localhost:5000/contacts");
                    this.items = response.data;
                } catch (err) {
                    console.log(err);
                }
            },
        
            // Delete Contact
            async deleteContact(id) {
                try {
                    await axios.delete(`http://localhost:5000/contacts/${id}`);
                    this.getContacts();
                } catch (err) {
                    console.log(err);
                }
            },
        },
    };
</script>
  
<style>
</style>