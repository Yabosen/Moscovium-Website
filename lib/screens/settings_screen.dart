import 'package:flutter/material.dart';

class SettingsScreen extends StatefulWidget {
  final Function(bool, Color) onThemeUpdate;
  final bool isDarkMode;
  final Color accentColor;

  const SettingsScreen({
    super.key,
    required this.onThemeUpdate,
    required this.isDarkMode,
    required this.accentColor,
  });

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  late bool _currentDarkMode;
  late Color _currentAccentColor;

  final List<Color> _availableColors = [
    Colors.purple,
    Colors.blue,
    Colors.green,
    Colors.orange,
    Colors.red,
    Colors.pink,
    Colors.teal,
    Colors.indigo,
    Colors.amber,
    Colors.cyan,
  ];

  @override
  void initState() {
    super.initState();
    _currentDarkMode = widget.isDarkMode;
    _currentAccentColor = widget.accentColor;
  }

  void _updateTheme() {
    widget.onThemeUpdate(_currentDarkMode, _currentAccentColor);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        centerTitle: true,
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: _currentDarkMode
                ? [
                    Colors.grey[900]!,
                    Colors.grey[800]!,
                  ]
                : [
                    Colors.grey[100]!,
                    Colors.grey[200]!,
                  ],
          ),
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Theme Section
                Card(
                  elevation: 8,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Theme Settings',
                          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: _currentAccentColor,
                          ),
                        ),
                        const SizedBox(height: 20),
                        
                        // Dark Mode Toggle
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                Icon(
                                  _currentDarkMode ? Icons.dark_mode : Icons.light_mode,
                                  color: _currentAccentColor,
                                ),
                                const SizedBox(width: 12),
                                Text(
                                  'Dark Mode',
                                  style: Theme.of(context).textTheme.titleMedium,
                                ),
                              ],
                            ),
                            Switch(
                              value: _currentDarkMode,
                              onChanged: (value) {
                                setState(() {
                                  _currentDarkMode = value;
                                });
                                _updateTheme();
                              },
                              activeThumbColor: _currentAccentColor,
                            ),
                          ],
                        ),
                        
                        const SizedBox(height: 20),
                        
                        // Accent Color Selection
                        Text(
                          'Accent Color',
                          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 12),
                        
                        Wrap(
                          spacing: 12,
                          runSpacing: 12,
                          children: _availableColors.map((color) {
                            final isSelected = color == _currentAccentColor;
                            return GestureDetector(
                              onTap: () {
                                setState(() {
                                  _currentAccentColor = color;
                                });
                                _updateTheme();
                              },
                              child: Container(
                                width: 50,
                                height: 50,
                                decoration: BoxDecoration(
                                  color: color,
                                  shape: BoxShape.circle,
                                  border: Border.all(
                                    color: isSelected ? Colors.white : Colors.transparent,
                                    width: 3,
                                  ),
                                  boxShadow: isSelected
                                      ? [
                                          BoxShadow(
                                            color: color.withOpacity(0.5),
                                            blurRadius: 10,
                                            spreadRadius: 2,
                                          ),
                                        ]
                                      : null,
                                ),
                                child: isSelected
                                    ? const Icon(
                                        Icons.check,
                                        color: Colors.white,
                                        size: 24,
                                      )
                                    : null,
                              ),
                            );
                          }).toList(),
                        ),
                      ],
                    ),
                  ),
                ),
                
                const SizedBox(height: 24),
                
                // Customization Section
                Card(
                  elevation: 8,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Customization',
                          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: _currentAccentColor,
                          ),
                        ),
                        const SizedBox(height: 20),
                        
                        // Preview Section
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: _currentAccentColor.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(
                              color: _currentAccentColor,
                              width: 2,
                            ),
                          ),
                          child: Column(
                            children: [
                              Text(
                                'Preview',
                                style: TextStyle(
                                  color: _currentAccentColor,
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 12),
                              Text(
                                'This is how your theme will look',
                                style: Theme.of(context).textTheme.bodyMedium,
                              ),
                              const SizedBox(height: 16),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: _currentAccentColor,
                                  foregroundColor: Colors.white,
                                ),
                                child: const Text('Sample Button'),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                
                const Spacer(),
                
                // Reset Button
                Center(
                  child: ElevatedButton.icon(
                    onPressed: () {
                      setState(() {
                        _currentDarkMode = true;
                        _currentAccentColor = Colors.purple;
                      });
                      _updateTheme();
                    },
                    icon: const Icon(Icons.refresh),
                    label: const Text('Reset to Default'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.grey[600],
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 24,
                        vertical: 12,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
