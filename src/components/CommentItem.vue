<template>
    <div class="mb-6 pl-4 border-l-2 border-blue-200" :class="{ 'ml-8': depth > 0 }">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <span class="font-medium text-gray-800">{{ comment.author }}</span>
            <span class="text-sm text-gray-500 mr-2">{{ comment.date }}</span>
          </div>
          <button 
            @click="$emit('reply', comment)"
            class="text-blue-600 hover:text-blue-800 text-sm"
          >
            پاسخ
          </button>
        </div>
        <p class="mt-2 text-gray-700">{{ comment.text }}</p>
      </div>
      
      <!-- پاسخ‌ها -->
      <div v-if="replies.length" class="mt-4">
        <CommentItem
          v-for="reply in replies"
          :key="reply.id"
          :comment="reply"
          :replies="getReplies(reply.id)"
          :depth="depth + 1"
          @reply="$emit('reply', $event)"
        />
      </div>
      
      <!-- فرم پاسخ (اگر در حال پاسخ به این کامنت هستیم) -->
      <div 
        v-if="replyingTo === comment.id" 
        class="mt-4 bg-gray-50 p-4 rounded-lg"
      >
        <textarea
          v-model="replyText"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          rows="3"
          placeholder="پاسخ خود را بنویسید..."
        ></textarea>
        <div class="flex justify-end mt-2">
          <button
            @click="submitReply"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            ارسال پاسخ
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    comment: Object,
    replies: Array,
    depth: {
      type: Number,
      default: 0
    },
    replyingTo: Number
  });
  
  const emit = defineEmits(['reply']);
  
  const replyText = ref('');
  
  const submitReply = () => {
    if (replyText.value.trim()) {
      emit('reply', {
        ...props.comment,
        replyText: replyText.value
      });
      replyText.value = '';
    }
  };
  
  const getReplies = (commentId) => {
    return props.replies.filter(reply => reply.parentId === commentId);
  };
  </script>