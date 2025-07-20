-- Insert 18 pairs of contrasting shoes (36 total shoes)
INSERT INTO shoes (name, price, features, image_url, pair_id) VALUES

-- Pair 1: Budget vs Premium
('Converse Chuck Taylor All Star', 65.00, ARRAY['Canvas upper', 'Rubber toe cap', 'Timeless design', 'Affordable classic'], '/images/converse-chuck-taylor.jpg', 1),
('Common Projects Achilles Low', 425.00, ARRAY['Premium Italian leather', 'Minimalist design', 'Gold foil numbers', 'Luxury craftsmanship'], '/images/common-projects-achilles.jpg', 1),

-- Pair 2: Athletic vs Casual
('Nike Air Max 90', 120.00, ARRAY['Air cushioning', 'Athletic performance', 'Sporty design', 'Running heritage'], '/images/nike-air-max-90.jpg', 2),
('Vans Old Skool', 65.00, ARRAY['Skate culture', 'Casual wear', 'Waffle outsole', 'Street style'], '/images/vans-old-skool.jpg', 2),

-- Pair 3: Sustainable vs Tech
('Allbirds Tree Runners', 98.00, ARRAY['Eucalyptus fiber', 'Carbon negative', 'Sustainable materials', 'Eco-friendly'], '/images/allbirds-tree-runners.jpg', 3),
('Nike Adapt BB 2.0', 350.00, ARRAY['Auto-lacing', 'Smartphone control', 'LED indicators', 'Tech innovation'], '/images/nike-adapt-bb.jpg', 3),

-- Pair 4: Minimalist vs Bold
('Maison Margiela GAT', 395.00, ARRAY['Clean lines', 'Minimal branding', 'White leather', 'Understated luxury'], '/images/maison-margiela-gat.jpg', 4),
('Balenciaga Triple S', 1050.00, ARRAY['Chunky silhouette', 'Bold colors', 'Statement piece', 'Dad shoe trend'], '/images/balenciaga-triple-s.jpg', 4),

-- Pair 5: Heritage vs Modern
('Red Wing Iron Ranger', 320.00, ARRAY['Full grain leather', 'Goodyear welt', 'Heritage craftsmanship', 'Timeless design'], '/images/red-wing-blacksmith.jpg', 5),
('Adidas Ultraboost 22', 190.00, ARRAY['Primeknit upper', 'Boost cushioning', 'Modern materials', 'Performance tech'], '/images/adidas-ultraboost.jpg', 5),

-- Pair 6: Comfort vs Style
('Hoka Clifton 9', 140.00, ARRAY['Maximum cushioning', 'Lightweight foam', 'All-day comfort', 'Orthopedic support'], '/images/hoka-clifton.jpg', 6),
('Saint Laurent Court Classic', 495.00, ARRAY['Sleek silhouette', 'Fashion-forward', 'Luxury leather', 'Style over comfort'], '/images/saint-laurent-court.jpg', 6),

-- Pair 7: Outdoor vs Urban
('Salomon Speedcross 5', 130.00, ARRAY['Trail running', 'Aggressive lugs', 'Weather resistant', 'Outdoor performance'], '/images/salomon-speedcross.jpg', 7),
('Golden Goose Superstar', 495.00, ARRAY['Urban style', 'Distressed finish', 'Italian crafted', 'City fashion'], '/images/golden-goose-superstar.jpg', 7),

-- Pair 8: Classic vs Trendy
('Adidas Stan Smith', 100.00, ARRAY['Tennis heritage', 'Timeless white', 'Global icon', 'Classic design'], '/images/adidas-stan-smith.jpg', 8),
('Off-White x Nike Dunk', 2000.00, ARRAY['Collaboration piece', 'Hype culture', 'Limited edition', 'Trendy design'], '/images/off-white-dunk.jpg', 8),

-- Pair 9: Versatile vs Specialized
('Nike Air Force 1', 110.00, ARRAY['Versatile styling', 'Day to night', 'Multi-occasion', 'All-purpose'], '/images/nike-air-force-1.jpg', 9),
('Nike Vaporfly Next%', 250.00, ARRAY['Race specific', 'Carbon plate', 'Performance focused', 'Running only'], '/images/nike-vaporfly-next.jpg', 9),

-- Pair 10: Ethical vs Performance
('Veja V-10', 150.00, ARRAY['Fair trade', 'Organic materials', 'Ethical production', 'Social responsibility'], '/images/veja-v10.jpg', 10),
('Nike ZoomX Invincible', 180.00, ARRAY['Maximum performance', 'Advanced foam', 'Athletic optimization', 'Speed focused'], '/images/nike-zoomx-invincible.jpg', 10),

-- Pair 11: Formal vs Casual
('Church''s Oxford', 450.00, ARRAY['Formal dress shoe', 'Leather sole', 'Business appropriate', 'Traditional styling'], '/images/churchs-oxford.jpg', 11),
('Vans Slip-On', 55.00, ARRAY['Casual comfort', 'Easy wear', 'Relaxed style', 'Everyday shoe'], '/images/vans-slip-on.jpg', 11),

-- Pair 12: Durable vs Lightweight
('Dr. Martens 1460', 170.00, ARRAY['Heavy duty', 'Long lasting', 'Robust construction', 'Built to last'], '/images/dr-martens-1460.jpg', 12),
('Adidas Adizero', 160.00, ARRAY['Ultra lightweight', 'Minimal design', 'Speed focused', 'Racing weight'], '/images/adidas-adizero.jpg', 12),

-- Pair 13: Retro vs Futuristic
('New Balance 990v5', 185.00, ARRAY['Retro styling', 'Dad shoe aesthetic', 'Classic proportions', 'Nostalgic design'], '/images/new-balance-990.jpg', 13),
('Yeezy Boost 350', 220.00, ARRAY['Futuristic design', 'Primeknit upper', 'Modern silhouette', 'Forward thinking'], '/images/yeezy-boost-350.jpg', 13),

-- Pair 14: Artisan vs Mass Market
('Paraboot Chambord', 380.00, ARRAY['Hand stitched', 'Small batch', 'Artisan crafted', 'Traditional methods'], '/images/paraboot-chambord.jpg', 14),
('Nike Revolution 6', 70.00, ARRAY['Mass produced', 'Affordable price', 'Wide availability', 'Standard quality'], '/images/nike-revolution-6.jpg', 14),

-- Pair 15: Weather vs Style
('Timberland 6-Inch Boot', 200.00, ARRAY['Waterproof', 'Weather resistant', 'Practical design', 'Function first'], '/images/timberland-6inch.jpg', 15),
('Bottega Veneta Tire Boot', 1200.00, ARRAY['Fashion statement', 'Luxury materials', 'Style focused', 'Weather secondary'], '/images/bottega-veneta-tire.jpg', 15),

-- Pair 16: Innovation vs Tradition
('Nike Air Mag', 8000.00, ARRAY['Self-lacing', 'LED lights', 'Futuristic tech', 'Innovation showcase'], '/images/nike-air-mag.jpg', 16),
('Alden Cordovan', 600.00, ARRAY['Traditional methods', 'Shell cordovan', 'Heritage techniques', 'Time-tested design'], '/images/alden-cordovan.jpg', 16),

-- Pair 17: Loud vs Subtle
('Nike Dunk SB "What The"', 800.00, ARRAY['Bold patterns', 'Eye-catching', 'Statement piece', 'Attention grabbing'], '/images/nike-dunk-what-the.jpg', 17),
('Common Projects BBall Low', 350.00, ARRAY['Subtle design', 'Understated', 'Minimal branding', 'Quiet luxury'], '/images/common-projects-bball.jpg', 17),

-- Pair 18: Local vs Global
('Vans Authentic', 50.00, ARRAY['California heritage', 'Local culture', 'Regional identity', 'Community focused'], '/images/vans-authentic.jpg', 18),
('Adidas Samba', 100.00, ARRAY['Global reach', 'Worldwide appeal', 'International brand', 'Universal design'], '/images/adidas-samba.jpg', 18);
