import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // ícones para interatividade

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Instagram</Text>
      </View>

      {/* Seção de Perfil */}
      <View style={styles.profileContainer}>
        {/* Imagem de Perfil */}
        <Image 
          source={{ uri: "https://s11.aconvert.com/convert/p3r68-cdx67/036k6-dw619.jpg"}}  // Imagem de exemplo
          style={styles.profileImage}
        />

        {/* Informações do Usuário */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>@isis.azevedo</Text>
          <View style={styles.stats}>
           <View style={styles.stat}>
              <Text style={styles.statNumber}>100</Text>
              <Text style={styles.statLabel}>Postagens</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>200K</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>150</Text>
              <Text style={styles.statLabel}>Seguindo</Text>
            </View>
          </View>
        </View>

        {/* Botão de Editar Perfil */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Postagens do Usuário */}
      <View style={styles.postsContainer}>
        <View style={styles.postRow}>
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/vmb0l-xpe8e.jpg' }} />
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/99tv5-a4zlf.jpg' }} />
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/ugshv-0xym3.jpg' }} />
        </View>
        <View style={styles.postRow}>
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/ulmsl-2atno.jpg' }} />
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/2y8zd-ev85p.jpg' }} />
          <Image style={styles.postImage} source={{ uri: 'https://s11.aconvert.com/convert/p3r68-cdx67/njxim-fapge.jpg' }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    backgroundColor: '#0095F6',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postsContainer: {
    marginTop: 20,
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});


