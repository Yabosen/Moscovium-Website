import 'package:flutter/material.dart';

class SocialLinks extends StatelessWidget {
  final Color accentColor;

  const SocialLinks({
    super.key,
    required this.accentColor,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _SocialButton(
          icon: Icons.facebook,
          onPressed: () {
            // TODO: Add Facebook link here
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Facebook link will be added here')),
            );
          },
          accentColor: accentColor,
        ),
        const SizedBox(width: 12),
        _SocialButton(
          icon: Icons.alternate_email, // Twitter/X icon
          onPressed: () {
            // TODO: Add Twitter/X link here
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Twitter/X link will be added here')),
            );
          },
          accentColor: accentColor,
        ),
        const SizedBox(width: 12),
        _SocialButton(
          icon: Icons.telegram,
          onPressed: () {
            // TODO: Add Telegram link here
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Telegram link will be added here')),
            );
          },
          accentColor: accentColor,
        ),
        const SizedBox(width: 12),
        _SocialButton(
          icon: Icons.discord,
          onPressed: () {
            // TODO: Add Discord link here
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Discord link will be added here')),
            );
          },
          accentColor: accentColor,
        ),
      ],
    );
  }
}

class _SocialButton extends StatefulWidget {
  final IconData icon;
  final VoidCallback onPressed;
  final Color accentColor;

  const _SocialButton({
    required this.icon,
    required this.onPressed,
    required this.accentColor,
  });

  @override
  State<_SocialButton> createState() => _SocialButtonState();
}

class _SocialButtonState extends State<_SocialButton>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _scaleAnimation;
  bool _isHovered = false;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(milliseconds: 200),
      vsync: this,
    );
    _scaleAnimation = Tween<double>(
      begin: 1.0,
      end: 1.2,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeInOut,
    ));
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _onHover(bool isHovered) {
    setState(() {
      _isHovered = isHovered;
    });
    if (isHovered) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => _onHover(true),
      onExit: (_) => _onHover(false),
      child: AnimatedBuilder(
        animation: _scaleAnimation,
        builder: (context, child) {
          return Transform.scale(
            scale: _scaleAnimation.value,
            child: Container(
              decoration: BoxDecoration(
                color: _isHovered ? widget.accentColor : Colors.transparent,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: widget.accentColor,
                  width: 2,
                ),
              ),
              child: IconButton(
                onPressed: widget.onPressed,
                icon: Icon(
                  widget.icon,
                  color: _isHovered ? Colors.white : widget.accentColor,
                  size: 24,
                ),
                padding: const EdgeInsets.all(8),
                constraints: const BoxConstraints(
                  minWidth: 40,
                  minHeight: 40,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
