class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :genre_id, :lyrics
end
