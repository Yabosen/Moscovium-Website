import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'screens/home_screen.dart';
import 'screens/settings_screen.dart';
import 'theme/app_theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MoscoviumApp());
}

class MoscoviumApp extends StatefulWidget {
  const MoscoviumApp({super.key});

  @override
  State<MoscoviumApp> createState() => _MoscoviumAppState();
}

class _MoscoviumAppState extends State<MoscoviumApp> {
  bool _isDarkMode = true; // Default to dark mode
  Color _accentColor = Colors.purple; // Default violet color

  @override
  void initState() {
    super.initState();
    _loadThemeSettings();
  }

  Future<void> _loadThemeSettings() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _isDarkMode = prefs.getBool('isDarkMode') ?? true;
      final colorValue = prefs.getInt('accentColor');
      if (colorValue != null) {
        _accentColor = Color(colorValue);
      }
    });
  }

  void _updateTheme(bool isDarkMode, Color accentColor) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('isDarkMode', isDarkMode);
    await prefs.setInt('accentColor', accentColor.value);
    
    setState(() {
      _isDarkMode = isDarkMode;
      _accentColor = accentColor;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Moscovium',
      theme: AppTheme.lightTheme(_accentColor),
      darkTheme: AppTheme.darkTheme(_accentColor),
      themeMode: _isDarkMode ? ThemeMode.dark : ThemeMode.light,
      home: MainScreen(
        onThemeUpdate: _updateTheme,
        isDarkMode: _isDarkMode,
        accentColor: _accentColor,
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MainScreen extends StatefulWidget {
  final Function(bool, Color) onThemeUpdate;
  final bool isDarkMode;
  final Color accentColor;

  const MainScreen({
    super.key,
    required this.onThemeUpdate,
    required this.isDarkMode,
    required this.accentColor,
  });

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: [
          HomeScreen(
            isDarkMode: widget.isDarkMode,
            accentColor: widget.accentColor,
          ),
          SettingsScreen(
            onThemeUpdate: widget.onThemeUpdate,
            isDarkMode: widget.isDarkMode,
            accentColor: widget.accentColor,
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }
}
