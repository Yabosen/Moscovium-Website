import 'package:flutter/material.dart';
import '../widgets/donate_button.dart';
import '../widgets/social_links.dart';
import '../widgets/download_button.dart';

class HomeScreen extends StatelessWidget {
  final bool isDarkMode;
  final Color accentColor;

  const HomeScreen({
    super.key,
    required this.isDarkMode,
    required this.accentColor,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: isDarkMode
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
          child: Stack(
            children: [
              // Donate button in top left
              Positioned(
                top: 20,
                left: 20,
                child: DonateButton(accentColor: accentColor),
              ),
              
              // Social links in top right
              Positioned(
                top: 20,
                right: 20,
                child: SocialLinks(accentColor: accentColor),
              ),
              
              // Main content in center
              Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Moscovium title with border
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 40,
                        vertical: 20,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: accentColor,
                          width: 3,
                        ),
                        borderRadius: BorderRadius.circular(20),
                        boxShadow: [
                          BoxShadow(
                            color: accentColor.withOpacity(0.3),
                            blurRadius: 20,
                            spreadRadius: 5,
                          ),
                        ],
                      ),
                      child: Text(
                        'Moscovium',
                        style: TextStyle(
                          fontSize: 48,
                          fontWeight: FontWeight.bold,
                          color: accentColor,
                          letterSpacing: 2,
                        ),
                      ),
                    ),
                    
                    const SizedBox(height: 60),
                    
                    // Download button in center
                    DownloadButton(accentColor: accentColor),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
