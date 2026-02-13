import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorSchemeSeed: Colors.blueGrey,
      ),
      home: const MainMenuScreen(),
    );
  }
}

class MainMenuScreen extends StatelessWidget {
  const MainMenuScreen({super.key});

  void _navigateTo(BuildContext context, String title, String desc, String img) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => DetailPage(title: title, description: desc, imageUrl: img),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profi Navigáció'),
        actions: [
          PopupMenuButton<int>(
            onSelected: (value) {
              if (value == 1) {
                _navigateTo(context, 'Contact', 'Vedd fel velünk a kapcsolatot: info@profi.hu', 'https://picsum.photos/seed/contact/600/400');
              } else if (value == 2) {
                _navigateTo(context, 'Others', 'Itt vannak az egyéb extra funkciók és beállítások.', 'https://picsum.photos/seed/others/600/400');
              } else if (value == 3) {
                _navigateTo(context, 'About Us', 'Mi vagyunk a csapat, aki ezt a remek appot fejlesztette neked.', 'https://picsum.photos/seed/about/600/400');
              }
            },
            itemBuilder: (context) => [
              const PopupMenuItem(
                value: 1,
                child: ListTile(
                  leading: Icon(Icons.email_outlined),
                  title: Text('Contact'),
                  contentPadding: EdgeInsets.zero,
                ),
              ),
              const PopupMenuItem(
                value: 2,
                child: ListTile(
                  leading: Icon(Icons.more_horiz),
                  title: Text('Others'),
                  contentPadding: EdgeInsets.zero,
                ),
              ),
              const PopupMenuDivider(), // Itt a csík az About Us felett
              const PopupMenuItem(
                value: 3,
                child: ListTile(
                  leading: Icon(Icons.info_outline),
                  title: Text('About Us'),
                  contentPadding: EdgeInsets.zero,
                ),
              ),
            ],
          ),
        ],
      ),
      body: const Center(child: Text('Nyisd meg a menüt a jobb felső sarokban!')),
    );
  }
}

class DetailPage extends StatelessWidget {
  final String title;
  final String description;
  final String imageUrl;

  const DetailPage({super.key, required this.title, required this.description, required this.imageUrl});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Column(
        children: [
          Image.network(imageUrl, width: double.infinity, height: 250, fit: BoxFit.cover),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold)),
                const SizedBox(height: 10),
                Text(description, style: const TextStyle(fontSize: 18)),
                const SizedBox(height: 20),
                ElevatedButton(onPressed: () => Navigator.pop(context), child: const Text('Vissza')),
              ],
            ),
          ),
        ],
      ),
    );
  }
}